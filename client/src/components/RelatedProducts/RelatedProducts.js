import React from 'react';
import List from './List';
import ListOutfit from './ListOutfit';
import AddToOutfit from './AddToOutfit';
import dummy from './dummy_related';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList: dummy.relatedProducts,
    };
    this.addToOutfitHandler = this.addToOutfitHandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
  }

  addToOutfitHandler() {
    const { outfitList } = this.state;
    const checker = outfitList.filter((item) => item.id === dummy.currentProduct.id);
    if (checker.length === 0) {
      this.setState({
        outfitList: [dummy.currentProduct, ...outfitList],
      });
    }
  }

  dropHandler(id) {
    const { outfitList } = this.state;
    this.setState({
      outfitList: outfitList.filter((item) => item.id !== id),
    });
  }

  render() {
    const { outfitList } = this.state;

    return (
      <div className="RR">
        <span>RelatedProducts</span>
        <List className="relatedProductsList" productsList={dummy.relatedProducts} />
        <div className="outfitListWithAdd">
          <AddToOutfit addToOutfitHandler={this.addToOutfitHandler} />
          <ListOutfit className="yourOwnOutfitList" productsList={outfitList} dropHandler={this.dropHandler} />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
