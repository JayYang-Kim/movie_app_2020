import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;

        //console.log(this.props);

        if(location.state === undefined) {
            history.push('/');
            console.log("state 정보가 없습니다.");
        }
    }

    render() {
        const {location} = this.props;
        if(location.state) {
            return (
                <span>{location.state.title}</span>
            )
        } else {
            return null;
        }
    }
}

export default Detail;