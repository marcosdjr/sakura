import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { ItemCard } from "./ItemCard";
import { Api } from "../../Api/Api";

import loadingImg from "../../Img/sakuraspin.svg"

import '../../Styles/ReadAll.scss'

export class ReadAll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            item: [],
        }
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(Api.readAllUrl());

        const items = await request.json();

        const itemsWithImageUrl = items.filter(item => Boolean(item.imageUrl));

        this.setState({
            isLoading: false,
            items: itemsWithImageUrl,
            filteredItems: itemsWithImageUrl
        })
    }

    filterItems = e => {
        const searchValue = e.target.value?.toLowerCase();

        const filteredItems = this.state.items.filter(item =>
            item.name?.toLowerCase().includes(searchValue),
        );

        this.setState({
            filteredItems
        });

    };



    render() {

        const { isLoading, filteredItems } = this.state;


        if (isLoading) {
            return (
                <Container >
                    <h1 className='link-style__content'> ☆ Cartas capturadas ☆</h1>
                    <Row className="readall">
                        <img className="loading" src={loadingImg} />
                    </Row>
                </Container>
            );
        } else {

            if (filteredItems == false) {
                return (
                    <Container className="readallcont">
                        <h1 className='link-style__content'> ☆ Cartas capturadas ☆</h1>

                        <Row className="readall">
                            <p className="noData"> ☆ Não há cartas capturadas! ☆ </p>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container  >
                        <h1 className='link-style__content'> ☆ Cartas capturadas ☆</h1>

                        <Row className="readall">
                            {filteredItems.map(item => (
                                <ItemCard item={item} key={item._id} />
                            ))}
                        </Row>
                    </Container>
                );
            }
        }



    }
}