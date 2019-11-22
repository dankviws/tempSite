import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title = "viws" />
    <div style = {{ 
        maxWidth: `400px`, 
        marginBottom: `1.45rem`, 
        display: `block`, 
        marginLeft: `auto`, 
        marginRight: `auto`, 
        textAlign: `center`,
        fontFamily: `Roboto`,
      }}>
      <Image />
      <h3 style = {{
        fontFamily: `Roboto`
        }}>
        Website under construction... We'll be back online soon with our new website!
      </h3>
      <p>
        <a href="mailto:admin@viws.io">
          <button 
            style={{
              marginTop: `100px`,
              fontSize: `24px`,
              height: `50px`,
              width: `200px`,
              borderRadius: `4px`
            }}>Contact Us
          </button>
        </a>
      </p>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
