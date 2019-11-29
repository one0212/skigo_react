import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
} from 'react-share'

const ReactShare = props => (
  <div>
    <FacebookShareButton url={props.url} quote={props.text}>
      <FacebookIcon size={32} />
        {/* <img src="/static/facebook-icon.png" /> */}
    </FacebookShareButton>
  </div>
)

export default ReactShare
