function deleteBlog(id){
    axios.delete(`/api/blog/${id}`).then(data => {
        if(data.status == 200){
            location.replace(`/my-blogs`)
        }else if(data.status == 404){
            location.replace('Not found')
        }
    })
}