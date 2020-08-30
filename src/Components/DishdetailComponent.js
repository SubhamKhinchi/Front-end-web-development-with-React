import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

    function RenderComment({comments})
    {   
        if (comments!=null){
            const cmnt = comments.map(com=>{
                return(
                    <React.Fragment>
                    <li>{com.comment}</li><br />
                    <li>-- {com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li><br />
                    </React.Fragment>
                )

            });
            return(
                <ul className="list-unstyled">{cmnt}</ul>
            )
        }
        else{
            return(<div></div>)
        }
    }
    function RenderDish({dish}){
        if (dish != null)
            return(
                <>
                    <div class="container">
                        <div class="row">
                            <div  className="col-12 col-md-5 m-1">
                                <Card>
                                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                                    <CardBody>
                                        <CardTitle>{dish.name}</CardTitle>
                                        <CardText>{dish.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div  className="col-12 col-md-5 m-1">
                                <h4>Comments</h4>
                                <RenderComment comments= {dish.comments} />
                            </div>
                        </div>
                    </div>
                </>
            );
        else
            return(
                <div></div>
            );
    }
    const Dishdetail =(props)=>{
        return (
            <div className="row">
                <RenderDish dish = {props.dish} />
            </div>
        );
    }
  
  
export default Dishdetail;