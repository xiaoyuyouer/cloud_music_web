import "./SearchContent.css"

import IconSingle from "../../assets/img/icon_single.png";

function SearchContent() {
    return (
        <div className="search-content">
            <div>搜"b"相关用户</div>
            <div style={{height: 1, backgroundColor: "#ccc"}}/>
            <div className="single-container">
                <div className="single-title">
                    <img src={IconSingle} alt='' width={15}/>
                    <span>单曲</span>
                </div>
                <div className="single-content">

                </div>
            </div>
        </div>
    )
}

export default SearchContent

