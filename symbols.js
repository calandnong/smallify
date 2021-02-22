module.exports = {
  // smallify properties
  kSmallifyRoot: Symbol('smallify.root'),
  kSmallifyName: Symbol('smallify.name'),
  kSmallifyOptions: Symbol('smallify.options'),
  kSmallifyRouterPrefix: Symbol('smallify.router.prefix'),
  kSmallifyVersion: Symbol('smallify.version'),
  kSmallifyAvvio: Symbol('smallify.avvio'),
  kSmallifyPino: Symbol('smallify.pino'),
  kSmallifyErrio: Symbol('smallify.errio'),
  kSmallifyServer: Symbol('smallify.server'),

  kSmallifyParent: Symbol('smallify.parent'),
  kSmallifyChildren: Symbol('smallify.children'),
  kSmallifyRoutes: Symbol('smallify.routes'),
  kSmallifyDecorates: Symbol('smallify.decorates'),
  kSmallifyRequest: Symbol('smallify.request'),
  kSmallifyReply: Symbol('smallify.reply'),
  kSmallifyHooks: Symbol('smallify.hooks'),
  kSmallifyParserDict: Symbol('smallify.parser.dict'),

  kServerListening: Symbol('server.listening'),

  kQueueRoutes: Symbol('queue.routes'),

  kRouteSmallify: Symbol('route.smallify'),
  kRouteParent: Symbol('route.parent'),
  kRouteRequest: Symbol('route.request'),
  kRouteReply: Symbol('route.reply'),
  kRouteSpan: Symbol('route.span'),

  kRequestRoute: Symbol('request.route'),
  kRequestRaw: Symbol('request.raw'),
  kRequestDecorates: Symbol('request.decorates'),

  kReplyRoute: Symbol('reply.route'),
  kReplyDecorates: Symbol('reply.decorates'),

  kValidationParams: Symbol('validation.params'),
  kValidationQuery: Symbol('validation.query'),
  kValidationBody: Symbol('validation.body'),
  kValidationResponse: Symbol('validation.response'),

  kSmallifyPluginMeta: Symbol.for('smallify.plugin.meta')
}
