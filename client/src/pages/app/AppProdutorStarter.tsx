import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mic, 
  Camera, 
  Send, 
  Check, 
  Share2, 
  Plus,
  Package,
  Calendar,
  DollarSign,
  FileText
} from "lucide-react";
import MobileFrame from "@/components/app/MobileFrame";

export default function AppProdutorStarter() {
  const [step, setStep] = useState<"home" | "cadastro-voz" | "cadastro-manual" | "confirmacao">("home");
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  
  // Dados mockados de ofertas
  const ofertas = [
    { id: 1, produto: "Morango Premium", quantidade: 500, unidade: "caixas", data: "Hoje, 14h", status: "Publicada", preco: 14 },
    { id: 2, produto: "Morango Orgânico", quantidade: 300, unidade: "caixas", data: "Amanhã, 10h", status: "Publicada", preco: 16 },
    { id: 3, produto: "Morango Comum", quantidade: 800, unidade: "caixas", data: "29/10, 8h", status: "Pendente", preco: 12 },
  ];

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simular transcrição após 2 segundos
    setTimeout(() => {
      setTranscription("Morango premium, 500 caixas, disponível hoje às 14 horas, R$ 14 a caixa");
      setIsRecording(false);
    }, 2000);
  };

  const renderHome = () => (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white p-4">
        <h1 className="text-xl font-bold">🌾 oZé Hortifruti</h1>
        <p className="text-sm text-green-100">Olá, João Silva!</p>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Resumo */}
        <div className="grid grid-cols-3 gap-2">
          <Card className="bg-white">
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-bold text-primary">{ofertas.length}</div>
              <div className="text-xs text-muted-foreground">Ofertas</div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-bold text-green-600">
                {ofertas.filter(o => o.status === "Publicada").length}
              </div>
              <div className="text-xs text-muted-foreground">Ativas</div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {ofertas.filter(o => o.status === "Pendente").length}
              </div>
              <div className="text-xs text-muted-foreground">Pendentes</div>
            </CardContent>
          </Card>
        </div>

        {/* Botão Nova Oferta */}
        <div className="space-y-2">
          <Button 
            className="w-full h-16 text-lg" 
            size="lg"
            onClick={() => setStep("cadastro-manual")}
          >
            <Plus className="mr-2 h-6 w-6" />
            Nova Oferta
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setStep("cadastro-voz")}
          >
            <Mic className="mr-2 h-4 w-4" />
            Cadastrar por Voz
          </Button>
        </div>

        {/* Lista de Ofertas */}
        <div className="space-y-3">
          <h2 className="font-semibold text-sm text-muted-foreground">Minhas Ofertas</h2>
          {ofertas.map((oferta) => (
            <Card key={oferta.id} className="bg-white">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-semibold">{oferta.produto}</div>
                    <div className="text-sm text-muted-foreground">
                      {oferta.quantidade} {oferta.unidade}
                    </div>
                  </div>
                  <Badge variant={oferta.status === "Publicada" ? "default" : "secondary"}>
                    {oferta.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {oferta.data}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    R$ {oferta.preco}/cx
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t bg-white p-2 grid grid-cols-4 gap-1">
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <Package className="h-5 w-5 mb-1" />
          <span className="text-xs">Ofertas</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-xs">Agenda</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <FileText className="h-5 w-5 mb-1" />
          <span className="text-xs">Histórico</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <Share2 className="h-5 w-5 mb-1" />
          <span className="text-xs">Perfil</span>
        </Button>
      </div>
    </div>
  );

  const renderCadastroVoz = () => (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:bg-primary-foreground/10"
          onClick={() => setStep("home")}
        >
          ← Voltar
        </Button>
        <h1 className="text-lg font-bold">Cadastro por Voz</h1>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Microfone */}
        <div className="flex flex-col items-center justify-center py-8">
          <div 
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${
              isRecording 
                ? "bg-red-500 animate-pulse" 
                : "bg-primary"
            }`}
          >
            <Mic className="h-16 w-16 text-white" />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {isRecording ? "Gravando..." : "Toque para gravar"}
          </p>
        </div>

        {/* Botão Gravar */}
        {!isRecording && !transcription && (
          <Button 
            className="w-full h-14 text-lg" 
            size="lg"
            onClick={handleStartRecording}
          >
            <Mic className="mr-2 h-5 w-5" />
            Iniciar Gravação
          </Button>
        )}

        {/* Transcrição */}
        {transcription && (
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                Transcrição
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{transcription}</p>
            </CardContent>
          </Card>
        )}

        {/* Exemplo */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-sm">💡 Exemplo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              "Morango premium, 500 caixas, disponível hoje às 14 horas, R$ 14 a caixa"
            </p>
          </CardContent>
        </Card>

        {/* Botões de Ação */}
        {transcription && (
          <div className="space-y-2">
            <Button 
              className="w-full h-12" 
              onClick={() => setStep("confirmacao")}
            >
              <Send className="mr-2 h-4 w-4" />
              Publicar Oferta
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setTranscription("");
                setIsRecording(false);
              }}
            >
              Gravar Novamente
            </Button>
            <Button 
              variant="ghost" 
              className="w-full"
              onClick={() => setStep("cadastro-manual")}
            >
              Preencher Manualmente
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  const renderCadastroManual = () => (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:bg-primary-foreground/10"
          onClick={() => setStep("home")}
        >
          ← Voltar
        </Button>
        <h1 className="text-lg font-bold">Nova Oferta</h1>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Foto */}
        <div>
          <Label className="text-sm font-medium">Foto do Produto (opcional)</Label>
          <Button variant="outline" className="w-full h-32 mt-2 border-dashed">
            <div className="text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Tirar Foto</span>
            </div>
          </Button>
        </div>

        {/* Produto */}
        <div>
          <Label htmlFor="produto" className="text-sm font-medium">Produto *</Label>
          <Select defaultValue="morango-premium">
            <SelectTrigger id="produto" className="mt-2">
              <SelectValue placeholder="Selecione o produto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morango-premium">🍓 Morango Premium</SelectItem>
              <SelectItem value="morango-organico">🍓 Morango Orgânico</SelectItem>
              <SelectItem value="morango-comum">🍓 Morango Comum</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quantidade */}
        <div>
          <Label htmlFor="quantidade" className="text-sm font-medium">Quantidade *</Label>
          <div className="flex gap-2 mt-2">
            <Input 
              id="quantidade" 
              type="number" 
              placeholder="500" 
              className="flex-1"
              defaultValue="500"
            />
            <Select defaultValue="caixas">
              <SelectTrigger className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="caixas">caixas</SelectItem>
                <SelectItem value="kg">kg</SelectItem>
                <SelectItem value="unidades">unidades</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Data/Hora */}
        <div>
          <Label htmlFor="disponibilidade" className="text-sm font-medium">Disponível em *</Label>
          <Select defaultValue="hoje-14h">
            <SelectTrigger id="disponibilidade" className="mt-2">
              <SelectValue placeholder="Selecione data e hora" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hoje-14h">Hoje, 14h</SelectItem>
              <SelectItem value="amanha-10h">Amanhã, 10h</SelectItem>
              <SelectItem value="29-10-8h">29/10, 8h</SelectItem>
              <SelectItem value="personalizado">Personalizado...</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Preço */}
        <div>
          <Label htmlFor="preco" className="text-sm font-medium">Preço Sugerido (opcional)</Label>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-muted-foreground">R$</span>
            <Input 
              id="preco" 
              type="number" 
              step="0.01" 
              placeholder="14,00" 
              className="flex-1"
              defaultValue="14.00"
            />
            <span className="text-sm text-muted-foreground">/ caixa</span>
          </div>
        </div>

        {/* Observação */}
        <div>
          <Label htmlFor="observacao" className="text-sm font-medium">Observação (opcional)</Label>
          <Textarea 
            id="observacao" 
            placeholder="Ex: Produto de primeira qualidade, colhido hoje pela manhã"
            className="mt-2 resize-none"
            rows={3}
          />
        </div>

        {/* Botão Publicar */}
        <Button 
          className="w-full h-12 text-lg" 
          size="lg"
          onClick={() => setStep("confirmacao")}
        >
          <Send className="mr-2 h-5 w-5" />
          Publicar Oferta
        </Button>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setStep("cadastro-voz")}
        >
          <Mic className="mr-2 h-4 w-4" />
          Cadastrar por Voz
        </Button>
      </div>
    </div>
  );

  const renderConfirmacao = () => (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 text-center">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
          <Check className="h-10 w-10" />
        </div>
        <h1 className="text-xl font-bold">Oferta Publicada!</h1>
        <p className="text-sm text-green-100 mt-1">Sua oferta já está visível para compradores</p>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Resumo da Oferta */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">🍓 Morango Premium</CardTitle>
            <CardDescription>500 caixas • Hoje, 14h</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Preço:</span>
              <span className="font-semibold">R$ 14,00 / caixa</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total estimado:</span>
              <span className="font-semibold text-primary">R$ 7.000,00</span>
            </div>
          </CardContent>
        </Card>

        {/* QR Code */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-sm">QR Code para Entrega</CardTitle>
            <CardDescription className="text-xs">
              Mostre este código ao entregar o produto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-6xl mb-2">⬛⬜⬛</div>
                <div className="text-xs">QR Code #OF-500</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Land Page */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-sm">🔗 Seu Catálogo Online</CardTitle>
            <CardDescription className="text-xs">
              Compartilhe com seus clientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-3 rounded-lg border text-sm font-mono text-center break-all">
              oze.app/joao-silva
            </div>
            <Button variant="outline" className="w-full mt-3" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </CardContent>
        </Card>

        {/* Botões de Ação */}
        <div className="space-y-2">
          <Button 
            className="w-full h-12" 
            onClick={() => setStep("cadastro-manual")}
          >
            <Plus className="mr-2 h-4 w-4" />
            Cadastrar Nova Oferta
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setStep("home")}
          >
            Voltar para Início
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="bg-green-100 text-green-700 mb-4">MVP Starter - Versão Gratuita</Badge>
          <h1 className="text-3xl font-bold mb-2">App Produtor - oZé Starter</h1>
          <p className="text-muted-foreground">
            Cadastre suas ofertas em menos de 2 minutos
          </p>
        </div>

        {/* App Preview */}
        <div className="flex justify-center">
          <MobileFrame>
            {step === "home" && renderHome()}
            {step === "cadastro-voz" && renderCadastroVoz()}
            {step === "cadastro-manual" && renderCadastroManual()}
            {step === "confirmacao" && renderConfirmacao()}
          </MobileFrame>
        </div>

        {/* Funcionalidades */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Funcionalidades da Versão Starter</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Cadastro Simplificado
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Cadastre por voz ou manualmente em menos de 2 minutos
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  QR Code Automático
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Código gerado automaticamente para rastreamento
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Land Page Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Catálogo online compartilhável (oze.app/seu-nome)
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Modo Offline
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Funciona sem internet, sincroniza depois
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

