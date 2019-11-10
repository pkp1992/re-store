import React, {Component} from 'react'
import "./ErrorBoundry";
import ErrorIndicator from "../ErrorIndicator";

class ErrorBoundry extends Component{
    state = {
        hasErrorMount: false
    }

    componentDidCatch() {
        this.setState({hasErrorMount: true});
    }
    render() {
        const {hasErrorMount} = this.state
        if (hasErrorMount) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}

export default ErrorBoundry;