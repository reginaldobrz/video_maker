const robots = {
  input: require('C:/Users/01204146195.GOIASPREV.000/Documents/video_maker/robots/input'),
  text: require('C:/Users/01204146195.GOIASPREV.000/Documents/video_maker/robots/text'),
  state: require('C:/Users/01204146195.GOIASPREV.000/Documents/video_maker/robots/state')
}

async function start() {  
  robots.input()
  await robots.text()

  const content = robots.state.load()
  console.dir(content, { depth: null})

}

start()