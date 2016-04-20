
(function(module){

function Project(opts){
  for (key in opts) this[key] = opts[key];
};

Project.prototype.toMyPortfolio = function(){
  var template = Handlebars.compile($('#projects-template').html());
  this.daysAgo = parseInt((new Date() - new Date(this.date)) / 60 / 60 / 24 / 1000);
  return template(this);
};


Project.all = [];

Project.loadAll = function(dataFromJSON){
  dataFromJSON.sort(function(a,b){
    return (new Date(b.date)) - (new Date(a.date));
  });
  dataFromJSON.forEach(function(ele){
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function(callback){
  $.ajax({
    type: 'HEAD',
    url: 'scripts/projectData.json',
    success: function(data, message, xhr){
      var eTag = xhr.getResponseHeader('eTag');
      if (eTag === localStorage.eTag){
        Project.loadAll(JSON.parse(localStorage.stashedProjectData));
        // projectView.initIndexPage();
        callback();
      } else {
        $.getJSON('scripts/projectData.json', function(data){
          Project.loadAll(data);
          localStorage.stashedProjectData = JSON.stringify(data);
          localStorage.eTag = eTag;
          // projectView.initIndexPage();
          callback();
        });
      }
    }
  });
};

Project.numWordsAll = function() {

    return Project.all.map(function(projects) {
      return projects.body.match(/\b\w+/g).length;// Grab the words from the `article` `body` (hint: lookup String.prototype.match() and regexp!).
    })
    .reduce(function(a, b) {
      return (a + b);// Sum up all the values!
    });
  };

  // DONE: Chain together a `map` and a `reduce` call to produce an array of unique author names.
  Project.allAuthors = function() {
    return Project.all.map(function(projects){
          // map our collection
      return projects.developer;// return just the author names
    }).reduce(function(a,b){
      if(a.indexOf(b) === -1){
        a.push(b);
        return a;
      } else {
        return a;
      }
    },[]);
      // For our `reduce` that we'll chain here -- since we are trying to return an array, we'll need to specify an accumulator type...
      // what data type should this accumulator be and where is it placed?
  };

  Project.numWordsByAuthor = function() {
    // DONE: Transform each element into an object with 2 properties: One for
    // the author's name, and one for the total number of words across the matching articles
    // written by the specified author.
    return Project.alldevelopers().map(function(developer) {
      return {
        name: developer,
        numWords: Project.all.filter(function(curProject) {
          return curProject.developer === developer;
        })
        //  what do we return here to check for matching authors?
        // })
        // .map(...) // use .map to return the author's word count for each article (hint: regexp!).
        .map(function(curProject){
          return curProject.body.split(' ').length;
        })
        // .reduce(...) // squash this array of numbers into one big number!
          .reduce(function(acc, cur) {
            return acc + cur;
          })
      };
    });
  };

module.Project = Project;
})(window);
