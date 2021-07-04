import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import '../../Styles/DeleteAll.scss';
import { Api } from '../../Api/Api';


export class DeleteAll extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    clickHandler = async event => {

        event.preventDefault();

        this.setState({
            isLoading: true
        })

        await Api.buildApiDeleteRequest(Api.deleteAllUrl())
            .catch(e => { console.error('Erro ao libertar as cartas: ', e) })

        this.setState({
            isLoading: false
        })

        this.goToHome()

    }

    goToHome = () => {
        this.props.history.push('/')
    }



    render() {
        return (
            <>
            <Col className='coluna-delete-all'>
                <h3 className='link-style__content'>☆ Volte a forma humilde que merece, Carta Clow! ☆</h3>
                <Card className='card-delete-all'>
                    <Card.Body>
                        <Card.Title>Libertar todas as Cartas</Card.Title>
                        <Card.Text>
                            Tem certeza que deseja libertar todas as cartas?
                            Essa ação não poderá ser revertida!
                        </Card.Text>

                        <Button className='btn' variant='danger' onClick={this.clickHandler}>Libertar</Button>
                        <Button className='btn' variant='primary' onClick={this.goToHome}>Cancelar</Button>


                    </Card.Body>
                </Card>
                </Col>
            </>

        )
    }
}