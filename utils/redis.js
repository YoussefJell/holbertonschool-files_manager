import redis from 'redis';

class RedisClient {
  RedisClient() {
    const client = redis.createClient();
    client.on('error', (err) => {
      console.log(err.message);
    });
  }

  isAlive() {
    this.client.on('ready', function() {
      return true;
    });
    return false;
  }

  async get(key) {
    return this.client.get(key, (err, reply) => {
      console.log(reply);
    });
  }

  async set(key, value, duration) {
    return this.client.set(key, value, 'EX', duration, (err, reply) => {
      console.log(reply);
    });
  }

  async del(key) {
    return this.client.del(key, (err, reply) => {
      console.log(reply);
    });
  }


}

const redisClient = new RedisClient();
module.exports = redisClient;
