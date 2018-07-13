import React from 'react'

class ProductDetail extends React.Component{
    render () {
        let pro=this.props.match.params.id
        let proName=this.props.location.query.name
        let proTime=this.props.location.query.time
        return(
            <div>
                <h1 className="page-header">产品详情页面 Detail</h1>
                <h4>产品编号:{pro}</h4>
                <h4>产品名称:{proName}</h4>
                <h4>上架时间:{proTime}</h4>
                <h4>组件生命周期 Mounting(已插入真实DOM) Updating(正在被重新渲染) Unmounting(已移除真实DOM)</h4>
            </div>
        )
    }
}

export default ProductDetail;