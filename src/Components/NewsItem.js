import React from 'react';

// export class NewsItem extends Component {
//   render() {
  const NewsItem=(props)=>{
    let {title, description, imgURL, newsURL, Author, date, source} = props;
    return (
        
      <div>
    
        <div className="card">
        <span className="badge position-absolute  rounded-pill text-bg-danger" style={{zIndex:'1' }}>{source} </span>
  <img src={!imgURL?"https://s.yimg.com/ny/api/res/1.2/LBec80cAS0zoKNuyJ7I5yQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/people_218/a3d898949078cc1a5a171bc025389bef":imgURL} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title?title:"notitle"}...</h5>
    <p className="card-text">{description?description:"nodesc"}...</p>
    <p className='card-text'><small className='text-muted'>Published by {Author?Author:"no Author"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsURL} target="_blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    );
  }
// }

export default NewsItem;
