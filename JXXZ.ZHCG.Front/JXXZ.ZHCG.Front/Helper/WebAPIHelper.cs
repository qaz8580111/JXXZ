﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;

namespace JXXZ.ZHCG.Front.Helper
{
    public class WebAPIHelper
    {
        public event GetDataCompletedEventHandler GetDataCompleted;

        public WebAPIHelper()
        {
        }

        public void GetDataAsync<T>(string uri, Dictionary<string, object> parms)
        {
            if (!uri.Contains("?"))
                uri += "?";
            else
                uri += "&";

            uri += "filter=" + JsonConvert.SerializeObject(parms);

            this.GetDataAsync<T>(uri);
        }

        public void GetDataAsync<T>(string uri)
        {
            //string api = "http://192.168.0.196:8088/";//Application.Current.Resources["api"] as string;//
            //string api = "http://192.168.0.188:8084/";//Application.Current.Resources["api"] as string;//

            //192.168.0.188:8084

            WebClient webClient = new WebClient();

            webClient.DownloadStringCompleted += (o, e) =>
            {
                T t = JsonConvert.DeserializeObject<T>(e.Result);

                if (this.GetDataCompleted != null)
                {
                    GetDataCompletedEventArgs args = new GetDataCompletedEventArgs();
                    args.DataResult = t;

                    this.GetDataCompleted(this, args);
                }
            };

            webClient.DownloadStringAsync(new Uri(uri));
        }
    }

    public delegate void GetDataCompletedEventHandler(object sender, GetDataCompletedEventArgs e);

    public class GetDataCompletedEventArgs
    {
        public object DataResult { get; set; }
    }
}