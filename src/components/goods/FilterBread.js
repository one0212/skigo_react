import React from 'react'


class FilterBread extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
        <div className="row">
            <div className="col-md-3 col-sm-0"> </div>
                <div className="col-md-9 col-sm-11">
                {/* 麵包屑 */}
                    首頁 > 滑雪課程
            </div>  
        </div>
      </>
    )
  }
 
}

export default FilterBread