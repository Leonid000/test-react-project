import ReactPaginate from 'react-paginate';
 
let SettingsPage = () => {
    let handlePageClick = (data) => {
        console.log (data.selected)
    }
    return (
        <ReactPaginate
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={100}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        activeClassName='selecteds'
        previousClassName='previous'
        nextClassName='previous'
        
      />
    )
}


export default SettingsPage