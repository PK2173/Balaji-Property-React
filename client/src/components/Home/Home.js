import React from "react";

export default function Home() {
  return (
    <div className="homecontainer">
      <div className="searchproperty">
        <div className="searchheader">
          <h3>Search Property</h3>
        </div>

        <div className="searchinputs">
          <div className="searchinputrow IWantTO">
            <label>I Want TO</label>
            <select class="w90" name="want_to" onchange="showme(this.value)">
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
            </select>
          </div>

          <div className="searchinputrow PropertyType">
            <label>Property Type</label>
            <select class="w90" name="want_to" onchange="showme(this.value)">
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
            </select>
          </div>

          <div className="searchinputrow City">
            <label>City</label>
            <select class="w90" name="want_to" onchange="showme(this.value)">
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
            </select>
          </div>

          <div className="searchinputrow Location">
            <label>Location</label>
            <select class="w90" name="want_to" onchange="showme(this.value)">
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
              <option value="1" selected="">
                Buy
              </option>
            </select>
          </div>

          <div className="Budget">
            <label>Budget</label>
            <div className="Budgetinput">
              <input
                type="text"
                name="sell_price_from"
                placeholder="Min (Lacs)"
              />
              to
              <input
                type="text"
                name="sell_price_to"
                placeholder="Max (Lacs)"
              />
            </div>
          </div>

          <div className="submitbuttonsear">
            <button className="searchmydesire">SEARCH</button>
          </div>
        </div>
                
      </div>
    </div>
  );
}
