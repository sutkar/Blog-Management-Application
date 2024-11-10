using BlogApi.DB;
using BlogApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetBlogPosts()
        {
            var data = DataStorage.ReadData();
            return Ok(data);
        }


        [HttpPost]
        public IActionResult CreateBlogPost([FromBody] BlogPost blogPost)
        {
            var data = DataStorage.ReadData();

            if(data.Count > 0)
            {
                blogPost.Id = data.Max(x => x.Id) + 1;
            } else
            {
                blogPost.Id = 0;
            }
            
            blogPost.DateCreated = DateTime.Now;
            data.Add(blogPost);
            DataStorage.WriteData(data);
            return Ok(blogPost);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateBlogPost(int id, [FromBody] BlogPost updatedBlogPost)
        {
            var data = DataStorage.ReadData();
            var blogPost = data.FirstOrDefault(x => x.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            blogPost.Username = updatedBlogPost.Username;
            blogPost.Text = updatedBlogPost.Text;
            DataStorage.WriteData(data);
            return Ok(blogPost);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteBlogPost(int id)
        {
            var data = DataStorage.ReadData();
            var blogPost = data.FirstOrDefault(x => x.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            data.Remove(blogPost);
            DataStorage.WriteData(data);
            return NoContent();
        }


    }
}
