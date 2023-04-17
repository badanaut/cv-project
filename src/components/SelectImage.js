import React, { Component } from 'react';
import "../styles/SelectImage.css"

class SelectImage extends Component{
    constructor(props){
        super(props);

        this.state ={
            imgSrc:null,
        };

        this.handleImageSource =this.handleImageSource.bind(this); 
    }

    handleImageSource(event){
        const file = event.target.files[0];

        if(file){
            const reader = new FileReader();

            reader.onload = (e) => {
                    this.setState({ imageSrc: e.target.result });
            };
            
            reader.readAsDataURL(file);
        }
    }
    

    render(){
        return (
            <>            
                <label htmlFor="image-upload" className="custom-file-upload">
                Add Image
                </label>
                <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={this.handleImageSource}
                />
            </>
        )
    }
}

export default SelectImage;