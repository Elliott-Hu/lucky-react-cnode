import React from "react";
import _throttle from "lodash/throttle";

export default class Waterfall extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
    this.$content = null;
    this.$container = null;
    this.state = { isLoading: false }
  }
  componentDidMount() {
    const $container = this.$container = $(this.props.container);
    $container.on("scroll", this.handleScroll);
  }
  handleScroll = _throttle(e => {
    const isInBottom = Math.abs(this.$container.height() - this.$content.offset().top - this.$content.height()) <= 1
    console.log(isInBottom);
    if (isInBottom) {
      this.setState({ isLoading: true }, () => {
        this.props.loadMore(this.props.currentPage + 1);
        this.setState({ isLoading: false })
      })
    }
  }, 100)
  render() {
    return (
      <div
        ref={ o => { this.$content = $(o); } }
        className={ this.props.className || "" }
      >
        { this.props.children }
      </div>
    )
  }
}