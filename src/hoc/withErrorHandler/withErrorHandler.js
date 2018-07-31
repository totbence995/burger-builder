import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';
import { ENGINE_METHOD_NONE } from 'constants';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,

        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
            });
            axios.interceptors.response.use(null, error => {
                this.setState({ error: error });
            });
        }

        render(){
            return (
                <Aux>
                <Modal show={this.state.error ? true : false}>
                    {this.state.error}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
            )
        }
    }
}

export default withErrorHandler;