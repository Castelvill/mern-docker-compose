import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <img src="https://thumbs.gfycat.com/SatisfiedSpicyHorse-size_restricted.gif" width={100} alt="Logo" />
                <Link to="/" className="navbar-brand">
                    GołeBaby.pl
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                List Output
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create Output
                            </Link>
                        </Item>
                    </List>
                </Collapse>
                <img src="https://i.gifer.com/WG8R.gif" width={50} alt="Logo" />
                <img src="https://images.gamebanana.com/img/ico/sprays/59872c18eb994.gif" width={50} alt="Logo" />
                <img src="https://media.tenor.com/LwfpUq5ZagUAAAAj/spin-it-dancing.gif" width={50} alt="Logo" />
            </React.Fragment>
        )
    }
}

export default Links