using System;
using System.Diagnostics;
using Intrinio.SDK.Api;
using Intrinio.SDK.Client;
using Intrinio.SDK.Model;
using System.Linq;
using System.Collections.Generic;

namespace Ticker
{
    public class GetSecurityStockPrices
    {
        //public List<StockPriceSummary> Savior { get; } {
            
        //    //move the stock List / array / whatever to here so we can access it on the website 


        //}

        public static void DoThis(string identifier = "AAPL", int pageSize = 3, string startDate = "2019-01-01", string freq = "daily")
        {
            Configuration.Default.AddApiKey("api_key", "OjEzNDI0MDg2ZGU4NGI2Yjc2N2ZjYWIzNDYwM2E0MDk3");

            var securityApi = new SecurityApi();
            var endDate = DateTime.Now.ToString();  // should just leave this as a DateTime and not ToString and Parse - but what if we enter it as a dropdown later? 
            //var freq = "daily";  
            var nextPage = ""; // boolean?   
            List <StockPriceSummary> save = new List<StockPriceSummary>();  
            try
            {
                ApiResponseSecurityStockPrices result = securityApi.GetSecurityStockPrices(identifier, DateTime.Parse(startDate), DateTime.Parse(endDate), freq, pageSize, nextPage);

                result.StockPrices.ForEach((StockPriceSummary stockPriceSummary) => Console.WriteLine(stockPriceSummary)); //save.Add(stockPriceSummary); 


            }


            catch (Exception e)
            {
                Debug.Print("Exception when calling SecurityApi.GetSecurityStockPrices: " + e.Message);
            }
        }
    }
}