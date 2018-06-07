import React from 'react';

class ImageFooter extends React.Component {
  constructor(props) {
    super(props);

    console.log('ImageFooter props', this.props);

    this.state = {
      imagesArray: this.props.imagesArray,
    };

    // const containerFull = {{margin: '0' 'auto'}};
  }

  render() {
    return (
      <div id="image-footer">
        <ul id="circles">
        {this.state.imagesArray.map((img, index) => {
          return (
            <React.Fragment key={index}>
              <li className="thumbnail-nav circle-selected" data-index={index}>
                <img src={img.img_src} data-src={img.img_src} alt="" width="75" height="75"></img>
              </li>
            </React.Fragment>
          )
        })}
        </ul>
      </div>
      /* <a zoom */
    )
  }
}

/*
<div id="image-footer">
style={{ border: '2px dotted #CABDBA' }}


<li class="thumbnail-nav circle-selected" data-index="0">
  <img src="https://img.etsystatic.com/il/6ffc70/1267268056/il_75x75.1267268056_dg8h.jpg?version=0" data-src="https://img.etsystatic.com/il/6ffc70/1267268056/il_75x75.1267268056_dg8h.jpg?version=0" alt="" width="75" height="75">
</li>
<li class="thumbnail-nav" data-index="1">
  <img src="https://img.etsystatic.com/il/8a980c/1295849555/il_75x75.1295849555_6r2b.jpg?version=0" data-src="https://img.etsystatic.com/il/8a980c/1295849555/il_75x75.1295849555_6r2b.jpg?version=0" alt="" width="75" height="75">
</li>
*/

export default ImageFooter;
