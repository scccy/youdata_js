var value = dataSet.map(function(d) {return d[0];});
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ydcdn.nosdn.127.net/echarts/extension/echarts-liquidfill.min.js?x=1';
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function () {
    var data = [value, ];
    myChart.setOption({
        series: [{
            type: 'liquidFill',
            data: data,
            radius: '80%',
            itemStyle: {
                normal: {
                    shadowBlur: 0
                }
            },
            backgroundStyle: {
                color: 'rgba(255,255,255,0)'
            },
            color: ['rgba(255,132,137,1)'],
            outline: {
                show: true,
                borderDistance: 0,
                itemStyle: {
                    borderColor: 'rgba(255,132,137,1)',
                    borderWidth: 1
                }
            },
            label: {
                normal: {
                    position: ['50%', '50%'],
                    formatter: function() {
                        return (value * 100).toFixed(0) + "%";
                    },
                    textStyle: {
                        fontSize: 25,
                        color: '#FFD655'
                    }

                }
            }
        }]
    })
}