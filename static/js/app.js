function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}


function buildPlot() {
  
  d3.json("/data/samples.json").then((data) => {
    console.log(data);

    for (var i = 0; i < 10; i++) {
      var sampleValues = unpack(data.samples.sample_values, i);
      var otuIds = unpack(data.samples.otu_ids, i);
      var otuLabels = unpack(data.samples.otu_labels, i);
    }
    console.log(sampleValues);
  
  var trace1 = {
    x: otuIds,
    y: sampleValues,
    type: "bar",    
    orientation: "h"
  };

  // Create the data array for the plot
  var data = [trace1];

  // Define the plot layout
  var layout = {
    title: "Top 10 OTUs",
//    xaxis: { title: "Organ" },
//    yaxis: { title: "Square Root of Survival" }
  };

  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("bar", data, layout);  

  });
}

buildPlot();