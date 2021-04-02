import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    static defaultProps = {
        initialValueGood: 0,
        initialValueNeutral: 0,
        initialValueBad: 0,
        
    };
    static propTypes = {
        
    };
    state = {
            valueGood: initialValueGood,
            valueNeutral: initialValueNeutral,
        initialValueBad: 0,
        total: 0,
        positiveFeedback: 0,
        };
    
    handleGood = (event) => {
        this.setState(prevState => ({ valueGood: prevState.valueGood + 1, }));
        countTotalFeedback();
    countPositiveFeedbackPercentage();
     };
    handleNeutral = (event) => {
        this.setState(prevState => ({ valueNeutral: prevState.valueNeutral + 1, }));
        countTotalFeedback();
    countPositiveFeedbackPercentage();
    };
    handleBad = (event) => {
        this.setState(prevState => ({ valueBad: prevState.valueBad + 1, }));
        countTotalFeedback();
    countPositiveFeedbackPercentage();
    };
    countTotalFeedback();
    countPositiveFeedbackPercentage();


    
    render() {
        return (
            <div className="Counter">
     <h2>Please leave feedback</h2>
      <button type="button" onClick={this.handleGood}> Good</button>
      <button type="button" onClick={this.handleNeutral}> Neutral</button>
      <button type="button" onClick={this.handleBad}> Bad</button>
                <h2>Statistics</h2>
                <div className="Counter_value">Good:{this.state.valueGood }</div>
                <div className="Counter_value">Neutral:{this.state.valueNeutral }</div>
                <div className="Counter_value">Bad:{this.state.valueBad}</div>
                <div className="Counter_value">Total:{this.state.valueBad}</div>
                 <div className="Counter_value">Positive feedback:{this.state.valueBad }</div>
    </div>
        )
    }
}

export default Counter;