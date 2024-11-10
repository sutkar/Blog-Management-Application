using BlogApi.Models;
using Newtonsoft.Json;
using System.Xml;

namespace BlogApi.DB
{
    public static class DataStorage
    {
        private static readonly string FilePath = "DB/data.json";

        public static List<BlogPost> ReadData()
        {
            if (!File.Exists(FilePath))
            {
                File.WriteAllText(FilePath, "[]");
            }
            var jsonData = File.ReadAllText(FilePath);
            return JsonConvert.DeserializeObject<List<BlogPost>>(jsonData) ?? new List<BlogPost>();
        }

        public static void WriteData(List<BlogPost> data)
        {
            var jsonData = JsonConvert.SerializeObject(data, Newtonsoft.Json.Formatting.Indented);
            File.WriteAllText(FilePath, jsonData);
        }
    }

}
