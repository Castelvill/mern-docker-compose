import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            text: '',
            image: '',
        }
    }

    handleChangeInputText = async event => {
        const text = event.target.value
        this.setState({ text })
    }

    handleChangeInputImage = async event => {
        const file = event.target.files[0];
        const image = await convertToBase64(file);
        console.log(image)
        this.setState({ image })
    }

    handleUpdateMovie = async () => {
        const { id, text, image } = this.state
        const payload = { text, image }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            this.setState({
                text: '',
                image: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            text: movie.data.data.text,
            image: movie.data.data.image,
        })
    }

    render() {
        const { text, image } = this.state
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>text: </Label>
                <InputText
                    type="text"
                    value={text}
                    onChange={this.handleChangeInputText}
                />

                <Label>Image: </Label>
                <input
                    type="file"
                    onChange={this.handleChangeInputImage}
                    label="Image"
                    name="myFile"
                    id='file-upload'
                    accept='.jpeg, .png, .jpg'
                />
                <br></br>
                <img src={image} width={150}/>

                <Button onClick={this.handleUpdateMovie}>Update Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesUpdate

function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}