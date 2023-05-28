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

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        this.setState({ image })
    }

    handleIncludeMovie = async () => {
        const { text, image } = this.state
        const payload = { text, image }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                text: '',
                image: ''
            })
        })
    }

    render() {
        const { text, image } = this.state
        return (
            <Wrapper>
                <Title>Create Output</Title>

                <Label>Text: </Label>
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


                <Button onClick={this.handleIncludeMovie}>Add Output</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesInsert

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