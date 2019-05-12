import React from 'react'
import ReactDOM from 'react-dom'
import DragDrop from './modules/DragDrop'
import UploadButton from './modules/UploadButton'
import {useRemoteImages} from './modules/upload'

function OrText() {
  return <h3 className="superscript">Or</h3>
}

function UploadContainer() {
  return (
    <section className="upload-container">
      <UploadButton />
      <OrText />
      <DragDrop />
    </section>
  )
}

// Image Gallery
function SeparatorLine() {
  return <hr />
}

function Image(props) {
  return <img src={props.src} alt="Wedding Photo" />
}

function ImagesContainer() {
  var imageUrls = useRemoteImages()

  return (
    <section>
      <div className="images-container">
        {imageUrls.map(function(url) {
          return <Image key={url} src={url} />
        })}
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <>
      <UploadContainer />
      <SeparatorLine />
      <ImagesContainer />
    </>
  )
}

ReactDOM.render(<Gallery />, document.getElementById('gallery-app'))
