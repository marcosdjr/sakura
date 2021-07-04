import { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Api } from '../../Api/Api';
import '../../Styles/Update.scss';

export class Update extends Component {

    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            isLoading: true,
            item: {},
        }
    }

    //async pq espera a informação da API
    async componentDidMount() {
        const request = await Api.buildApiGetRequest(
            Api.readSingleUrl(this.id)
        );

        const item = await request.json();

        this.setState({
            isLoading: false,
            item
        });
    }

    //função que inicia a alteração dos dados
    submitHandler = async event => {
        event.preventDefault();

        const { name, imageUrl } = event.target;

        const item = {
            name: name.value,
            imageUrl: imageUrl.value,
        }

        this.setState({
            isLoading: true
        })

        const request = await Api.buildApiPutRequest(
            Api.updateUrl(this.id),
            item
        ).catch(e => {
            console.error('Erro ao tentar chamar a carta: ', e);

        });

        this.setState({
            isLoading: false
        })

        await request.json()

        this.props.history.push(`/view/${this.id}`)

    }

    render() {

        const { item } = this.state;

        return (
            <>
                <Col className='colupdate'>
                <h1 className='link-style__content'> ☆ Shaoran, me ajuda?! ☆</h1>
                <br/>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Nome da Carta</Form.Label>
                            <Form.Control type="text" placeholder="Nome da Carta" defaultValue={item.name} />
                            <Form.Text className="text-muted">Carta Clow!</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="imageUrl">
                            <Form.Label>URL da imagem da Carta</Form.Label>
                            <Form.Control type="text" placeholder="Insira a URL da imagem da Carta" defaultValue={item.imageUrl}></Form.Control>
                            <Form.Text className="text-muted">Certifique-se de que essa URL representa uma imagem de Carta Clow válida!</Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" block>Alterar</Button>

                    </Form>
                </Col>
            </>
        )
    }
}