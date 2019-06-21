import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './../../store/actions';

export class MyListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { myList, recs } = this.props;
        return (
            <div className="container">
                <h3 className="title">My List</h3>
                <div className="wrapper">
                    {
                        myList.map((item, index) => {
                            return <div className="myList" key={index}>
                                <div>
                                    {item.title}
                                </div>
                                <img src={item.img} className="removeImg" alt={item.title}></img>
                                <button className="removebtn"
                                    onClick={() => this.props.removeMyList(index)}>
                                    Remove from MyList
                                    </button>
                            </div>
                        })
                    }
                </div>
                <div className="recDiv">
                    <h3 className="title">Recommendations</h3>
                    <div className="wrapper">
                        {
                            recs.map((item, index) => {
                                return <div className="myList" key={index}>
                                    <div>
                                        {item.title}
                                    </div>
                                    <img src={item.img} className="removeImg" alt={item.title}></img>
                                    <button className="removebtn"
                                        onClick={() => this.props.addMyList(item, index)}>
                                        Add to MyList
                                    </button>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="listDiv">
                    <h4 className="title">MyList</h4>
                    <ul className="list-group list-group-horizontal">
                        {
                            myList.map((item, index) => {
                                return <li key={index} className="list-group-item">{item.title}</li>
                            })
                        }
                    </ul>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    const { myList, recommendations } = state;
    return {
        myList: myList,
        recs: recommendations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeMyList: (index) => dispatch({ type: actionTypes.REMOVE_ITEM, ind: index }),
        addMyList: (item, index) => {
            dispatch({
                type: actionTypes.ADD_ITEM,
                ind: index,
                item: item
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListView);

