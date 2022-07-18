import './charList.scss';
import PropTypes from 'prop-types';
import {Component} from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList  extends Component {

    state ={
        chars : [],
        loading : true,
        error : false,
        newCharsLoading : false,
        offset: 210,
        charsEnded : false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch();
    }

    onCharListLoading = () => {
        this.setState({
            newCharsLoading : true
        })
    }

    onCharListLoaded = (newChars) => {
        let ended = false;
        if (newChars.length < 9) {
            ended = true;
        }

        this.setState(({chars, offset}) => (
            {
                chars : [...chars, ...newChars],
                loading : false,
                newCharsLoading : false,
                offset: offset + 9,
                charsEnded : ended
            }
        ));
    }

    makeCharList =() => {
        const {chars, loading, error} = this.state;
        return chars.map((item) => {

            let imgStyle ={'objectFit' : 'cover'}
            if (item.thumbnail.includes('image_not_available')) {
                imgStyle = {'objectFit' : 'unset'};
            }

            const active = this.props.charId === item.id;
            const clazz = active ? 'char__item char__item_selected' : 'char__item'

            let result = <li
                            tabIndex={0} 
                            key={item.id}
                            className={clazz}
                            onFocus={() => this.props.onCharSelected(item.id)}
                            >
                                <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                                <div className="char__name">{item.name}</div>
                        </li>;
            if (loading) {
                result = <Spinner/>
            }
            if (error) {
                result = <ErrorMessage/>
            }
            return result;
        });

    }
    
    render(){

        
        const {newCharsLoading, offset, charsEnded} = this.state;
        const view = this.makeCharList();
        
        
        return (
            <div className="char__list">
                <ul className="char__grid">
                    {view}
                </ul>
                <button 
                    className="button button__main button__long"
                    disabled={newCharsLoading}
                    style ={{'display': charsEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}
                    >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected : PropTypes.func.isRequired
}

export default CharList;
