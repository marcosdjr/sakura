import { Component } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Api } from '../../Api/Api';

import '../../Styles/Delete.scss'


export class Delete extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;

        this.state = {
            isLoading: false,

        };
    }

    clickHandler = async event => {
        event.preventDefault();

        this.setState = ({
            isLoading: true
        })

        await Api.buildApiDeleteRequest(Api.deleteUrl(this.id))
        .catch(e => {
            console.error('Erro ao libertar a carta: ', e);
        })

        this.setState = ({
            isLoading: false
        })

        this.goToHome();
    }

    goToHome = () => {
        this.props.history.push(`/`);
    }

    goToView = () => {
        this.props.history.push(`/view/${this.id}`);
    }

    render() {
        return (
            <Col className='coluna-delete-one'>
                <h1 className='link-style__content'> ☆ Ai, ai, ai, Yukito! ☆</h1>
            <Card className='card-deletaritem'>
                <Card.Body>
                    <Card.Title>Libertar Carta</Card.Title>
                    <Card.Text>Tem certeza que deseja libertar essa carta (excluir o item)?</Card.Text>

                    <Button className="btn" variant="danger" onClick={this.clickHandler}>Libertar</Button>
                    <Button className="btn" variant="primary" onClick={this.goToView}>Cancelar</Button>

                </Card.Body>

            </Card>
            </Col>

        )
    }




}