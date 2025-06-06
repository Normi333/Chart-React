const reportHtmlData = {
    Population: `
    <h2>Population Report</h2>
    <table class="report-table">
      <thead>
        <tr><th>District</th><th>Population</th><th>Growth Rate (%)</th></tr>
      </thead>
      <tbody>
        <tr><td>Central</td><td>1,200,000</td><td>2.1</td></tr>
        <tr><td>North</td><td>850,000</td><td>1.8</td></tr>
        <tr><td>South</td><td>920,000</td><td>2.3</td></tr>
      </tbody>
    </table>
  `,
    "Age Distribution": `
    <h2>Age Distribution</h2>
    <table class="report-table">
      <thead>
        <tr><th>Age Group</th><th>Population</th><th>Percentage</th></tr>
      </thead>
      <tbody>
        <tr><td>0-14</td><td>400,000</td><td>25%</td></tr>
        <tr><td>15-64</td><td>1,000,000</td><td>62%</td></tr>
        <tr><td>65+</td><td>170,000</td><td>13%</td></tr>
      </tbody>
    </table>
  `,
    Employment: `
    <h2>Employment Stats</h2>
    <table class="report-table">
      <thead>
        <tr><th>Sector</th><th>Employed</th><th>Unemployed</th></tr>
      </thead>
      <tbody>
        <tr><td>Agriculture</td><td>320,000</td><td>15,000</td></tr>
        <tr><td>Manufacturing</td><td>450,000</td><td>25,000</td></tr>
        <tr><td>Services</td><td>600,000</td><td>30,000</td></tr>
      </tbody>
    </table>
  `,
    Income: `
    <h2>Income Report</h2>
    <table class="report-table">
      <thead>
        <tr><th>District</th><th>Average Income (₹)</th><th>Median Income (₹)</th></tr>
      </thead>
      <tbody>
        <tr><td>Central</td><td>32,000</td><td>28,000</td></tr>
        <tr><td>North</td><td>29,500</td><td>26,500</td></tr>
        <tr><td>South</td><td>31,200</td><td>27,800</td></tr>
      </tbody>
    </table>
  `,
    Facilities: `
    <h2>Health Facilities</h2>
    <table class="report-table">
      <thead>
        <tr><th>Facility</th><th>Type</th><th>District</th></tr>
      </thead>
      <tbody>
        <tr><td>Sunrise Clinic</td><td>Clinic</td><td>Central</td></tr>
        <tr><td>Greenview Hospital</td><td>Hospital</td><td>North</td></tr>
        <tr><td>Hope Health Center</td><td>Primary Care</td><td>South</td></tr>
      </tbody>
    </table>
  `,
    "Disease Rate": `
    <h2>Disease Rates</h2>
    <table class="report-table">
      <thead>
        <tr><th>Disease</th><th>Rate (per 1000)</th><th>District</th></tr>
      </thead>
      <tbody>
        <tr><td>Flu</td><td>45</td><td>Central</td></tr>
        <tr><td>Diabetes</td><td>22</td><td>North</td></tr>
        <tr><td>Hypertension</td><td>30</td><td>South</td></tr>
      </tbody>
    </table>
  `,
};

export default reportHtmlData;
