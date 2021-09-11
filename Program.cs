using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Formatting.Compact;
using System;
using System.IO;


namespace TrabalhoLP1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            #region Serilog
            string logFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "logs");
            Directory.CreateDirectory(logFolder);
            Log.Logger = new LoggerConfiguration()
               .Enrich.FromLogContext()
               .WriteTo.Debug(outputTemplate: DateTime.Now.ToString())
               .WriteTo.File(new CompactJsonFormatter(), (Path.Combine(logFolder, @".json")),
                    retainedFileCountLimit: 20,
                    rollingInterval: RollingInterval.Day)
               .WriteTo.File((Path.Combine(logFolder, @".log")),
                    retainedFileCountLimit: 20,
                    rollingInterval: RollingInterval.Day)
               .CreateLogger();
            Log.Information("Logger funcionado...");
            #endregion

            try
            {
                Log.Information("Starting...");
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
