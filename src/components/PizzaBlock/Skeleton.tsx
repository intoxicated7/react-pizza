import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={296}
    height={380}
    viewBox="0 0 296 380"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <circle cx="116" cy="116" r="116" /> 
    <rect x="-1" y="248" rx="10" ry="10" width="216" height="24" /> 
    <rect x="6" y="295" rx="9" ry="9" width="76" height="24" /> 
    <rect x="108" y="295" rx="10" ry="10" width="102" height="24" />
  </ContentLoader>
)

export default Skeleton