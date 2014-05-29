import ajax from 'ic-ajax';
export default Ember.Object.extend({
  find: function(name, id){
    // subreddit
    // aww
    return ajax('http://www.reddit.com/r/'+ id + '.json')
    .then(function(result){
      return result.data.children.map(function(item,index){
        return {
          id: item.id,
          title: item.data.title,
          domain: item.data.domain,
          url: item.data.url
        };
      });
    });
  }
});
