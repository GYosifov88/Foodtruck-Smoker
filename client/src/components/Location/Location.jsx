export default function Location() {
  return (
    <div className="row nomargin threeBoxes" id="location">
      <div className="col-md-4 col-sm-4">
        <div
          className="googleMap"
          data-location="Marine Ave. New York, NY"
          data-text="Big Smoke Ave .1224, <br>New York, NY"
        />
      </div>
      <div className="col-md-4 col-sm-4">
        <div
          className="full-width-photo"
          data-image="./src/assets/flavours/bigsmokebbq/images/content/photo-1.jpg"
        />
      </div>
      <div className="col-md-4 col-sm-4">
        <div className="blackboard custom-scrollbar">
          <h3 className="big">Recent Tweets</h3>
          <div className="tweets">
            <div style={{ display: "none" }}>
              here will be displayed live tweets, configuration is placed in
              /twitter/config.php
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}