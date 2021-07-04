import { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import '../../Styles/Create.scss';
import { Api } from '../../Api/Api';

export class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    submitHandler = async event => {

        event.preventDefault();

        const { name, imageUrl } = event.target;

        const item = {
            name: name.value,
            imageUrl: imageUrl.value
        }

        this.setState({
            isLoading: true
        })

        const request = await Api.buildApiPostRequest(
            Api.createUrl(),
            item
        ).catch(e => {
            console.error('Carta não capturada', e)
        })

        this.setState({
            isLoading: false
        })

        const result = await request.json();

        const id = result._id

        this.props.history.push(`/view/${id}`)

    }


    render() {
        return (
            <>

                <Col className='colcreate'>
                    <h1 className='link-style__content'> ☆ Carta criada pelo Mago Clow, abandone sua velha forma e transforme-se para servir ao seu novo dono, em nome de Sakura! ☆</h1>
                    <br/>                     

                    <Form onSubmit={this.submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Nome da Carta</Form.Label>
                            <Form.Control type='text' placeholder='Nome da Carta' />
                            <Form.Text className='text-muted'>Carta Clow!</Form.Text>
                        </Form.Group>

                        <Form.Group controlId='imageUrl'>
                            <Form.Label>URL da imagem da Carta</Form.Label>
                            <Form.Control type='text' placeholder='Insira a URL da imagem da Carta' />
                            <Form.Text className='text-muted'>Certifique-se de que essa URL representa uma imagem de Carta Clow válida!</Form.Text>
                        </Form.Group>

                        <Button  variant='primary' type='submit' block>Capturar Carta</Button>


                    </Form>
                </Col>
            </>
        )
    }
}