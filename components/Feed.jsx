
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Story from "./Story";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl ">
        {/* Stories */}
        <div className="flex items-center space-x-4 bg-gray-100 p-2 mb-4 z-10 ">
          <Story
            image={
              "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            username="Magro"
          />
          
          <Story
            image={
              "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            username="Kelvin"
          />
          <Story
            image={
              "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            username="Mike"
          />
        </div>

        {/* Create Post */}
        <CreatePost />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
