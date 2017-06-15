// create an array with nodes
var changeChosenEdgex =
  function(values, id, selected, hovering) {
    edge.draw(ctx);
  }
// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);
