// Simulação de produtos
export const listProducts = [
  {
    id: 1,
    name: 'Gin Tanqueray',
    value: 40,
    estoque: 8,
    image:
      'https://s3-alpha-sig.figma.com/img/518b/69fc/94f1f919cd8c2500bb4571829a9ae76a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSeLLlpHXVMMH9MgNPwwSLM16VOoGXfcJGNwN9a-gM717py1OvflJ8DlMhd635JIBM6inSMABceAEuhU0bnqE-OYMCaYhOONSbMe7g0JSC1JDb9hVazzH7J7nOYI3zXHAhJV-qikJuaP6jOLi2uYAZFnUiWFjAhUcd6fhjfh2ibw-IgDTWNQm91dldoORqNvdy2X3hIf9U53l4yV9eRP9UDTema6HeNrHWihWcTPq74eBK9bDTbg8nFz0QdFOFT60SGMyt7P8SInbUYAfrSMMULKyLe4Il-1nuHA~Pz9ZE-Yqbu0Y-RRPz0cJH6ynxPimCAfzjapa5EGD~x6gz7Odg__',
  },
  {
    id: 2,
    name: 'Bear Mate',
    value: 18,
    estoque: 10,
    image:
      'https://s3-alpha-sig.figma.com/img/b12e/d228/2cdb9d86d48a73e39ab16dd98b515aac?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LG43VkACMmuRtAaDAIwkokBZctOSJJDkoy8yRxugL3i5v5RloBf-RlpK3WnkPb72Tw2-XjlYAJ8M7i823Gwat5F1nzQ1z3EOa-thC8hSBNy6y5IvjbIFN6eYiYW9PGxUZYkJ5sev3keqGebu8fd7pMxlwWK-sggRQEjHskyTny60L9byRhhnQ-Ww6mHQnXeLrcGce0QP8dqsj1nmk6RlxJoo026aH0I9j2orwOkqga79UytXxQ8Y7HjMYPEOWT0ExoebZa-Gf8TxpdHJ2qZ1vk9c~ZsaqnO9hq7N-5a5aw6LCDwc5HhMq1dB~rMAVyW~hBUBEWMWJNXMHdzjG5jivg__',
  },
  {
    id: 3,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 3,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
  {
    id: 4,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 5,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
  {
    id: 5,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 5,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
  {
    id: 6,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 8,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
];
