import React, { Component } from "react";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      display: "0",
      expression: "",
      tempResult: "",
      digitCount: 0
    };
    this.handleDigit = this.handleDigit.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleAc = this.handleAc.bind(this);
  }
  handleDigit(arg) {
    this.setState({ digitCount: this.state.digitCount + 1 });
    if (this.state.digitCount <= 11) {
      if (this.state.result == 0) {
        this.setState({
          result: this.state.result + arg,
          display: arg
        });
      } else {
        this.setState({
          result: this.state.result.concat(arg),
          display: this.state.result.concat(arg)
        });
      }
    } else if (this.state.display == "DIGIT LIMIT") {
    } else {
      this.setState({
        tempResult: this.state.result,
        display: "DIGIT LIMIT"
      });
      this.timer = setTimeout(_ => {
        this.setState({
          result: this.state.tempResult,
          display: this.state.tempResult
        });
      }, 700);
    }
  }
  handleAc() {
    this.setState({
      result: "",
      digitCount: 0,
      expression: "",
      display: "0"
    });
  }
  handleOp(arg) {
    if (
      this.state.result != "DIGIT LIMIT" &&
      this.state.display != "+" &&
      this.state.display != "-" &&
      this.state.display != "x" &&
      this.state.display != "/" &&
      this.state.digitCount != 0
    ) {
      switch (arg) {
        case "equals":
          if (
            eval(this.state.expression.concat(this.state.result)).toString()
              .length <= 11 &&
            (this.state.expression.includes("+") ||
              this.state.expression.includes("*") ||
              this.state.expression.includes("-") ||
              this.state.expression.includes("/"))
          ) {
            this.setState({
              expression: this.state.expression.concat(this.state.result)
            });
            this.timer = setTimeout(() => {
              this.setState({
                result: eval(this.state.expression).toString()
              });
            }, 1);
            this.timer = setTimeout(() => {
              this.setState({
                expression: this.state.result,
                display: this.state.result
              });
            }, 2);
          }
          break;
        case "plus":
          this.setState({
            display: "+"
          });
          this.timer = setTimeout(() => {
            this.setState({
              expression: this.state.result.concat("+"),
              result: ""
            });
          }, 1);
          break;
        case "minus":
          this.setState({
            display: "-"
          });
          this.timer = setTimeout(() => {
            this.setState({
              expression: this.state.result.concat("-"),
              result: ""
            });
          }, 1);
          break;
        case "multiply":
          this.setState({
            display: "x"
          });
          this.timer = setTimeout(() => {
            this.setState({
              expression: this.state.result.concat("*"),
              result: ""
            });
          }, 1);
          break;
        case "divide":
          this.setState({
            display: "/"
          });
          this.timer = setTimeout(() => {
            this.setState({
              expression: this.state.result.concat("/"),
              result: ""
            });
          }, 1);
          break;
        case "dot":
          if (!this.state.result.includes(".")) {
            this.setState({
              result: this.state.result.concat(".")
            });
            this.timer = setTimeout(() => {
              this.setState({
                display: this.state.result
              });
            }, 1);
          }
          break;
      }
    } else {
    }
  }
  render() {
    return (
      <div>
        <div className="calculator">
          <div className="display">{this.state.display}</div>
          <div className="left">
            <div className="topRow">
              <button
                className="top"
                onClick={() => this.handleAc("ac")}
                id="ac"
              >
                AC
              </button>
              <button
                className="top"
                onClick={() => this.handleOp("divide")}
                id="divide"
              >
                /
              </button>
            </div>
            <div className="secRow">
              <button
                className="sec digit"
                onClick={() => this.handleDigit(7)}
                id="seven"
              >
                7
              </button>
              <button
                className="sec digit"
                onClick={() => this.handleDigit(8)}
                id="eight"
              >
                8
              </button>
              <button
                className="sec digit"
                onClick={() => this.handleDigit(9)}
                id="nine"
              >
                9
              </button>
            </div>
            <div className="thirdRow">
              <button
                className="third digit"
                onClick={() => this.handleDigit(4)}
                id="four"
              >
                4
              </button>
              <button
                className="third digit"
                onClick={() => this.handleDigit(5)}
                id="five"
              >
                5
              </button>
              <button
                className="third digit"
                onClick={() => this.handleDigit(6)}
                id="six"
              >
                6
              </button>
            </div>
            <div className="fourthRow">
              <button
                className="fourth digit"
                onClick={() => this.handleDigit(1)}
                id="1"
              >
                1
              </button>
              <button
                className="fourth digit"
                onClick={() => this.handleDigit(2)}
                id="two"
              >
                2
              </button>
              <button
                className="fourth digit"
                onClick={() => this.handleDigit(3)}
                id="three"
              >
                3
              </button>
            </div>
            <div className="lastRow">
              <button
                className="last digit"
                onClick={() => this.handleDigit(0)}
                id="zero"
              >
                0
              </button>
              <button
                className="last digit"
                onClick={() => this.handleOp("dot")}
                id="dot"
              >
                .
              </button>
            </div>
          </div>
          <div className="right">
            <div className="rightTop">
              <button
                className="rightBut"
                onClick={() => this.handleOp("multiply")}
                id="multiply"
              >
                X
              </button>
            </div>
            <div className="right2nd">
              <button
                className="rightBut"
                onClick={() => this.handleOp("minus")}
                id="-"
              >
                -
              </button>
            </div>
            <div className="right3rd">
              <button
                className="rightBut"
                onClick={() => this.handleOp("plus")}
                id="plus"
              >
                +
              </button>
            </div>
            <div className="rightLast">
              <button
                className="rightBut"
                onClick={() => this.handleOp("equals")}
                id="equals"
              >
                =
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          By{" "}
          <a href="https://www.linkedin.com/in/daltonnorth" target="_blank">
            Dalton North
          </a>
        </div>
      </div>
    );
  }
}

export default App;
