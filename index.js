function superbowlWin(superbowlData) {
    // Use the find() function to search for an object with result === "W"
    const win = superbowlData.find(superbowl => superbowl.result === "W");
    
    // If a win is found, return the year property, otherwise return undefined
    return win ? win.year : undefined;
  }
  
