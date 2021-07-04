import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import '../../Styles/ReadSingle.scss'

export class ReadSingle extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;

        this.state = {
            isLoading: true,
            item: {},
        };
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(
            Api.readSingleUrl(this.id)
        )

        const item = await request.json();

        this.setState({
            isLoading: false,
            item,
        });

    }

    render() {

        const { item } = this.state;

        return(
            //_id é o nome do campo
            <>
                <Container className="actions">
                    <Link className="btn btn-info" to={'/update/' + item._id}>Alterar Captura</Link>
                    <Link className="btn btn-danger" to={'/delete/' + item._id}>Libertar</Link>
                </Container>

                <Container>
                    <Row>
                        <Col className="col-readsingle-title">
                            <h1 className="info-title-readsingle">{item.name}</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-img-readsingle">
                            <img className="info-img-readsingle" src={item.imageUrl} alt={item.name}></img>
                        </Col>
                    </Row>


                </Container>
            </>
        );
    }
}