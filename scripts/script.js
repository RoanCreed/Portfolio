// Function to expand the clicked tile and show detailed content
function expandTile(tile) {
    
    // Get the title and description from the clicked tile
    const title = tile.querySelector('.tile-title').textContent;
    const description = tile.querySelector('.tile-description').textContent;
  
    // Update the expanded view with the title and description
    document.getElementById('expanded-title').textContent = title;
    document.getElementById('expanded-description').textContent = description;
  
    //**** Taken out for release ****
    //*****document.getElementById('overlay').style.display = 'block';

    // Show the expanded view (modal) 
    //****** document.getElementById('expanded-view').style.display = 'block';
    
  }
  
  // Function to close the expanded view (modal)
  function closeExpandedView() {
    // Hide the expanded tile and overlay
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('expanded-view').style.display = 'none';
  }
  
  // Close the expanded view if clicking outside the tile (on the overlay)
  document.getElementById('overlay').addEventListener('click', closeExpandedView);
  