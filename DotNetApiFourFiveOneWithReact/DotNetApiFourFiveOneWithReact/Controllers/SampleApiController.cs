using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DotNetApiFourFiveOneWithReact.Controllers
{
    public class Sample
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class SampleApiController : ApiController
    {
        public IEnumerable<Sample> Get()
        {
            return new List<Sample>{
                new Sample{Id=1, Name="Sample One"},
                new Sample{Id=2, Name="Other Sample"}
            };
        }
    }
}
